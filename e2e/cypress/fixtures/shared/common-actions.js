export const commonAction = {
  filterRecordsByFilter(tableRecord, index, input) {
    cy.get(tableRecord)
      .eq(index)
      .then(element => {
        let record = element.text()
        cy.get(input).type(record)
        cy.get(tableRecord)
          .eq(index)
          .then(element => {
            expect(element.text()).to.equal(record)
          })
      })
  },
}
