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
          tag    
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
              id
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
          reviews {
            data {
              id
              attributes {
                reviewerName
                comment
                review
                createdAt
              }
            }
          }
        }
        
      }
    }
  }
`
export const getMeta = gql`
  query Meta($filters: CategoryFiltersInput) {
    categories(filters: $filters) {
      meta {
        pagination {
          total
          pageCount
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
              id
              attributes {
                name
              }
            }
          }
          name
          categories {
            data {
              id
              attributes {
                name
                products {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
              
            }
          }
          image {
            data {
              id
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
  query Category($categoryId: ID,$pagination: PaginationArg) {
    category(id: $categoryId) {
      data {
        id
        attributes {
          name
          products(pagination: $pagination) {
            data {
              id
              attributes {
                name
                description
                price
                category {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
                images {
                  data {
                    id
                    attributes {
                      url
                    }
                  }
                }
              }
            }
            
          }
        }
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