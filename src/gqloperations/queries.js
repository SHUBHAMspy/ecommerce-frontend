import { gql } from '@apollo/client'

export const getAllProducts = gql`

  query GetAllProducts($pagination: PaginationArg){
    products(pagination: $pagination) {
      data {
        id
        attributes {
          name
          description
          price
          images {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
          tag
        }
      }
      meta {
        pagination {
          pageCount
        }
      }
    }
  }
`

export const getProduct = gql`
  query Product($productId: ID) {
    product(id: $productId) {
      data {
        id
        attributes {
          name
          description
          price
          images {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
        }
        
      }
    }
  }
`
export const getMeta = gql`
  query Meta {
    categories {
      meta {
        pagination {
          total
        }
      }
    }
  }

`
export const getCategories = gql`
  query Categories($pagination: PaginationArg) {
    categories(pagination: $pagination) {
      data {
        id
        attributes {
          parent {
            data {
              attributes {
                name
              }
            }
          }
          name
          categories {
            data {
              attributes {
                name
                products {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
              id
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const getCategoryProducts = gql`
  query Category($categoryId: ID) {
    category(id: $categoryId) {
      data {
        attributes {
          name
          products {
            data {
              id
              attributes {
                name
                description
                price
                category {
                  data {
                    attributes {
                      name
                    }
                  }
                }
                images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        id
      }
    }
  }
`

export const getProductByName = gql `
  query Products($filters: ProductFiltersInput) {
    products(filters: $filters) {
      data {
        id
        attributes {
          name
          images {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
  `