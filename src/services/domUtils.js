export function changePageTitle(title) {
  window.document.title = title;
}

export async function changeTheme() {
  const newPalette = await _fetchColorPalette();
  _changeBackground(newPalette.reverse());
}

function _fetchColorPalette() {
  return new Promise((resolve, reject) => {
    const url = 'http://colormind.io/api/';
    const data = {
      model: 'ui',
    };

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200) {
        var palette = JSON.parse(http.responseText).result;
        resolve(palette);
      }
    };

    http.open('POST', url, true);
    http.send(JSON.stringify(data));
  });
}

function _changeBackground(newColors) {
  const cssVars = [
    '--color-primary',
    '--color-secondary',
    '--color-background',
    '--color-accent',
  ];

  cssVars.forEach((cssVar, i) => {
    window.document.documentElement.style.setProperty(
      cssVar,
      `rgb(${newColors[i].toString()})`
    );
  });
}
