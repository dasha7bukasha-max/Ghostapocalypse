(() => {
  // Public GoatCounter endpoint from the site owner's dashboard (not an API key).
  const endpoint = 'https://ghostapocalypse.goatcounter.com/count';
  const siteHost = 'autmnrain.palabrio.cc';
  const githubHost = 'dasha7bukasha-max.github.io';
  const githubPath = '/Ghostapocalypse';
  const { protocol, hostname, pathname } = window.location;
  const onGithub = hostname === githubHost &&
    (pathname === githubPath || pathname.startsWith(`${githubPath}/`));

  // Do not send analytics from local development, previews, or other sites.
  if (protocol !== 'https:' || (hostname !== siteHost && !onGithub)) {
    return;
  }

  // Count the same pages on both production addresses, without queries or fragments.
  const sitePath = onGithub ? pathname.slice(githubPath.length) || '/' : pathname;
  const path = sitePath.replace(/\/index\.html$/, '/');
  window.goatcounter = { path };

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.setAttribute('data-goatcounter', endpoint);
  document.head.appendChild(script);
})();
