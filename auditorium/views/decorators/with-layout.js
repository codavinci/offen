var html = require('choo/html')

module.exports = withLayout

function withLayout (headline) {
  return function (originalView) {
    return function (state, emit) {
      var flash = state.flash
      state.flash = null
      return html`
        <div data-role="app-host" class="f5 roboto dark-gray">
          <div class="w-100 h3 bg-black-05">
            <div class="mw8 ph3 pt2 center" id="headline">
              <h1 class="f2 normal mt0 mb4">${headline || __('Offen Auditorium')}</h1>
            </div>
          </div>
          <div class="mw8 center ph0 ph3-ns pb5">
            ${flash ? html`
              <p data-role="flash-message" class="dib pa2 br2 ma0 mt3 ml3 ml0-ns bg-light-yellow">${flash}</p>
            ` : null}
            ${originalView(state, emit)}
          </div>
        </div>
      `
    }
  }
}
