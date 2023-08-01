const header = {
  title: 'h1',
  row: 'div[class="rowHeader"]',
  name: 'div[ng-click="sort(\'show.name\')"]',
}

export const input = {
  perPage: 'select[ng-model="perPage"]',
  search: 'input[ng-model="search"]',
}

const section = {
  pagination: 'p[class="paginationP"]',
}

export const record = {
  row: 'div[class="ng-binding"]',
}

export const value = {
  morningJoe: 'Morning Joe',
  sortingAscending: 'span[class="glyphicon sort-icon glyphicon-chevron-up"]',
  sortingDescending: 'span[class="glyphicon sort-icon glyphicon-chevron-down"]',
}

const image = {
  favorite: 'img[alt="add to fav"]',
}

export const home = {
  getHomeUrl() {
    return `${Cypress.config().baseUrl}/home`
  },

  goToHomeURL() {
    return cy.visit(this.getHomeUrl())
  },

  getTitleHeader() {
    return cy.get(header.title).contains('TV Schedule')
  },

  getPerPageInput() {
    return cy.get(input.perPage)
  },

  getSearchInput() {
    return cy.get(input.search)
  },

  getTableHeader() {
    return cy.get(header.row)
  },

  getPaginationSection() {
    return cy.get(section.pagination)
  },

  getTableRow() {
    return cy.get(record.row)
  },

  getFirstRecord() {
    return cy.contains(value.morningJoe)
  },

  getDetailsUrl() {
    return `${Cypress.config().baseUrl}/details`
  },

  getFavoriteRecord() {
    return cy.get(record.row).find(image.favorite)
  },

  getTableHeaderName() {
    return cy.get(header.name)
  },
}
