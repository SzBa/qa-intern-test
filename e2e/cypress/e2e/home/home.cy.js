import { home, input, record, value } from '../../fixtures/home/home'
import { commonAction } from '../../fixtures/shared/common-actions'

describe('TV Schedule - home page tests', () => {
  beforeEach(() => {
    home.goToHomeURL()
  })

  it('should display all elements on the page', () => {
    home.getTitleHeader().should('be.visible')
    home.getPerPageInput().should('be.visible')
    home.getSearchInput().should('be.visible')
    home.getTableHeader().should('have.length', 2)
    home.getPaginationSection().should('be.visible')
  })

  it('should filter by name', () => {
    commonAction.filterRecordsByFilter(record.row, 0, input.search)
  })

  it('should sorting ascending by column name', () => {
    home.getTableHeaderName().last().click({ force: true })
    home.getTableHeaderName().last().find(value.sortingAscending)
  })

  it('should sorting descending by column name', () => {
    home.getTableHeaderName().last().dblclick({ force: true })
    home.getTableHeaderName().last().find(value.sortingDescending)
  })
})
