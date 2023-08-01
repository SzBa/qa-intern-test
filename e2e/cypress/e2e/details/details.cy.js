import { details } from '../../fixtures/details/details'
import { home } from '../../fixtures/home/home'

describe('TV Schedule - details page tests', () => {
  beforeEach(() => {
    home.goToHomeURL()
  })

  it('should add the record to the favorites list', () => {
    home.getFirstRecord().click({ force: true })
    details.getDetailsUrl()
    details.getAddToFavoritesButton().click()
    details.getBackButton().click()
    home.getFavoriteRecord()
  })
})
