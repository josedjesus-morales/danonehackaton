export const getPages = () => `
  {
        products {
          createdAt
          id
          publishedAt
          updatedAt
          ean {
            text
          }
          fats {
            text
          }
          footprintCarbon {
            text
          }
          footprintCo2 {
            text
          }
          hc {
            text
          }
          footprintEcological {
            text
          }
          ingredients {
            text
          }
          name {
            text
          }
          description {
            text
          }
          details {
            text
          }
        }
  }`;