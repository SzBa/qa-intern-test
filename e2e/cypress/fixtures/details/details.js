const button = {
  addToFavorites: 'img[alt="delete fav"]',
  back: 'button[class="navBtn"]',
}

export const details = {
  getDetailsUrl() {
    return `${Cypress.config().baseUrl}/details`
  },

  getAddToFavoritesButton() {
    return cy.get(button.addToFavorites)
  },

  getBackButton() {
    return cy.get(button.back)
  },
}
