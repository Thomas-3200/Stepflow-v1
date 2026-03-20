/**
 * auth.js — Autenticación simple por sessionStorage para el panel admin de StepFlow.
 * Contraseña almacenada como hash SHA-256 (nunca en texto plano).
 *
 * En producción real: reemplazar por autenticación JWT con backend.
 */

const ADMIN_PASSWORD_HASH = "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918";
// Hash SHA-256 de "admin" — cambiarlo antes de producción

const SESSION_KEY = "sf_admin_auth";
const SESSION_EXPIRY_KEY = "sf_admin_expiry";
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8 horas

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function login(password) {
    const hash = await hashPassword(password);
    if (hash === ADMIN_PASSWORD_HASH) {
        sessionStorage.setItem(SESSION_KEY, "true");
        sessionStorage.setItem(SESSION_EXPIRY_KEY, Date.now() + SESSION_DURATION_MS);
        return true;
    }
    return false;
}

function isAuthenticated() {
    const auth = sessionStorage.getItem(SESSION_KEY);
    const expiry = parseInt(sessionStorage.getItem(SESSION_EXPIRY_KEY) || "0");
    if (auth === "true" && Date.now() < expiry) return true;
    logout();
    return false;
}

function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_EXPIRY_KEY);
}

function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = "login.html";
    }
}
