/**
 * Main Application Script for Academic Personal Website
 * Dr. Sachit Mahajan
 */

import { initPublications } from "./publications.js";

// Theme Controller
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const storedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = storedTheme || (systemPrefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const active = document.documentElement.getAttribute("data-theme");
      const nextTheme = active === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
      updateThemeIcon(nextTheme);
    });
  }

  // Listen for system theme changes if user hasn't explicitly set a preference
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
      const newTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      updateThemeIcon(newTheme);
    }
  });
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  if (theme === "dark") {
    // Sun icon for switching to light
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.setAttribute("aria-label", "Switch to light mode");
  } else {
    // Moon icon for switching to dark
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.setAttribute("aria-label", "Switch to dark mode");
  }
}

// Mobile Menu Controller
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("mobile-active");
      });
    });
  }
}

// Dynamic News Rendering
async function initNews() {
  const container = document.getElementById("news-list");
  if (!container) return;

  let newsData = [];
  try {
    const res = await fetch("./data/news.json");
    if (res.ok) {
      newsData = await res.json();
    }
  } catch (e) {
    console.warn("Could not fetch news.json, using static markup if available", e);
  }

  if (newsData.length > 0) {
    container.innerHTML = newsData.map(item => `
      <div class="news-item">
        <span class="news-date">${item.date}</span>
        <span class="news-badge">${item.badge}</span>
        <span class="news-text">${item.content}</span>
      </div>
    `).join("");
  }
}

// Dynamic Projects Rendering
async function initProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  let projectsData = [];
  try {
    const res = await fetch("./data/projects.json");
    if (res.ok) {
      projectsData = await res.json();
    }
  } catch (e) {
    console.warn("Could not fetch projects.json, using static markup if available", e);
  }

  if (projectsData.length > 0) {
    container.innerHTML = projectsData.map(proj => `
      <div class="project-card">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.35rem;">
            <span class="project-category">${proj.category}</span>
            ${proj.award ? `<span class="pub-badge" style="background: var(--bg-highlight); color: var(--accent-primary); font-weight: 600; border-color: var(--accent-primary);">🏆 ${proj.award}</span>` : ''}
          </div>
          <h3>${proj.title}</h3>
          <p>${proj.description}</p>
          <div class="project-tags">
            ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
          </div>
        </div>
        <div class="project-footer">
          ${proj.github ? `
            <a href="${proj.github}" target="_blank" rel="noopener" class="pub-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
          ` : ''}
          ${proj.demo && proj.demo !== '#' ? `
            <a href="${proj.demo}" target="_blank" rel="noopener" class="pub-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Demo / Paper
            </a>
          ` : ''}
        </div>
      </div>
    `).join("");
  }
}

// Update copyright year
function initFooterYear() {
  const yr = document.getElementById("current-year");
  if (yr) {
    yr.textContent = new Date().getFullYear();
  }
}

// Active navigation highlight on scroll
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initNews();
  initProjects();
  initPublications();
  initFooterYear();
  initScrollSpy();
});
