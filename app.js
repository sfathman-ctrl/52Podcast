/* =========================================================
   52 LAUNCH — LINK HUB RENDERER
   =========================================================
   Reads the LINKS array from links-data.js and builds cards.
   You should not need to edit this file to add new links —
   just edit links-data.js instead.
   ========================================================= */

function createCard(item) {
  const card = document.createElement("article");
  card.className = "card";

  const media = document.createElement("div");
  media.className = "card-media";

  if (item.type === "video") {
    const iframe = document.createElement("iframe");
    iframe.src = item.url;
    iframe.title = item.title || "Embedded video";
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("frameborder", "0");
    media.appendChild(iframe);
    card.appendChild(media);
  } else if (item.image) {
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title || "";
    media.appendChild(img);
    card.appendChild(media);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  if (item.tag) {
    const tag = document.createElement("span");
    tag.className = "card-tag";
    tag.textContent = item.tag;
    body.appendChild(tag);
  }

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = item.title || "Untitled";
  body.appendChild(title);

  if (item.description) {
    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = item.description;
    body.appendChild(desc);
  }

  if (item.type === "link" && item.url) {
    const link = document.createElement("a");
    link.className = "card-link";
    link.href = item.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Open link →";
    body.appendChild(link);
  }

  card.appendChild(body);
  return card;
}

function renderLinks() {
  const grid = document.getElementById("link-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (!Array.isArray(window.LINKS) || window.LINKS.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "No links yet — add some in links-data.js.";
    grid.appendChild(empty);
    return;
  }

  window.LINKS.forEach((item) => grid.appendChild(createCard(item)));
}

document.addEventListener("DOMContentLoaded", renderLinks);
