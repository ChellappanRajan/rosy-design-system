export const DATA = {
  Items: {
    Item: [
      {
        ASIN: 'B08L5VKW15',
        DetailPageURL: 'https://www.amazon.com/dp/B08L5VKW15',
        ItemLinks: {
          ItemLink: [
            {
              URL: 'https://www.amazon.com/dp/B08L5VKW15?tag=your-associate-id',
            },
          ],
        },
        ItemAttributes: {
          Title: 'Example Product Name',
          Binding: 'Electronics',
          Brand: 'SampleBrand',
          ListPrice: {
            Amount: 9999,
            CurrencyCode: 'USD',
          },
          ProductGroup: 'Personal Computers',
          Color: 'Black',
          Model: 'EX12345',
          Manufacturer: 'Sample Manufacturer',
          Feature: [
            'Feature 1 description',
            'Feature 2 description',
            'Feature 3 description',
          ],
        },
        Offers: {
          Offer: [
            {
              OfferListing: {
                Price: {
                  Amount: 8999,
                  CurrencyCode: 'USD',
                },
                Availability: 'In Stock',
                Condition: 'New',
              },
            },
          ],
        },
        Images: {
          ImageSets: {
            ImageSet: [
              {
                MediumImage: {
                  URL: 'https://images.amazon.com/images/I/51vvP2u45mL._SX425_.jpg',
                  Height: 425,
                  Width: 425,
                },
                LargeImage: {
                  URL: 'https://images.amazon.com/images/I/51vvP2u45mL._SX679_.jpg',
                  Height: 679,
                  Width: 679,
                },
              },
            ],
          },
        },
        Reviews: {
          AverageRating: 4.5,
          TotalReviews: 1024,
          ReviewLink: 'https://www.amazon.com/dp/B08L5VKW15#customerReviews',
        },
      },
    ],
  },
};
