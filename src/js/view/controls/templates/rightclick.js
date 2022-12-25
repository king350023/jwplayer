export default (menu, localization) => {
    const { items = [] } = menu;
    const menuItems = items.map(item => rightClickItem(item, localization));

    return (
        `<div class="jw-rightclick jw-reset">` +
            `<ul class="jw-rightclick-list jw-reset">${menuItems.join('')}</ul>` +
        `</div>`
    );
};

function rightClickItem(item, localization) {
    const { featured, showLogo, type } = item;
    item.logo = showLogo ? `<span class="jw-rightclick-logo jw-reset"></span>` : '';
    return `<li class="jw-reset jw-rightclick-item ${featured ? 'jw-featured' : ''}">${itemContentTypes[type](item, localization)}</li>`;
}

const itemContentTypes = {
<<<<<<< HEAD
    link: ({ link, title, logo }) => `<a href="${link || ''}" class="jw-rightclick-link jw-reset-text" target="_blank" rel="noreferrer" dir="auto">${logo}${title || ''}</a>`,
    share: (item, localization) => `<button type="button" class="jw-reset-text jw-rightclick-link jw-share-item" dir="auto">${localization.sharing.heading}</button>`,
    pip: (item, localization) => `<button type="button" class="jw-reset-text jw-rightclick-link jw-pip-item" dir="auto">${localization.pipIcon}</button>`,
    keyboardShortcuts: (item, localization) => `<button type="button" class="jw-reset-text jw-rightclick-link jw-shortcuts-item" dir="auto">${localization.shortcuts.keyboardShortcuts}</button>`,
<<<<<<< HEAD
=======
    link: ({ link, title, logo }) => `<a href="${link || ''}" class="jw-rightclick-link jw-reset" target="_blank" rel="noreferrer">${logo}${title || ''}</a>`,
    info: (item, localization) => `<button type="button" class="jw-reset jw-rightclick-link jw-info-overlay-item">${localization.videoInfo}</button>`,
    share: (item, localization) => `<button type="button" class="jw-reset jw-rightclick-link jw-share-item">${localization.sharing.heading}</button>`,
    keyboardShortcuts: () => `<button type="button" class="jw-reset jw-rightclick-link jw-shortcuts-item">Keyboard Shortcuts</button>`,
>>>>>>> origin/bug/fix-tab-nabbing-vulnerability
=======
    button: ({ title, button }) => `<button type="button" class="jw-reset-text jw-rightclick-link jw-${button.name}-item" dir="auto">${title}</button>`
>>>>>>> c280de15ff78927c026010e4e7a83054e4638240
};


