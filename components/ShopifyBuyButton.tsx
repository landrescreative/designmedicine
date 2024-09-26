'use client';
import { useEffect } from 'react';

const ShopifyBuyButton = () => {
  useEffect(() => {
    const scriptURL =
      'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

    const loadShopify = () => {
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      document.head.appendChild(script);
      script.onload = ShopifyBuyInit;
    };

    const ShopifyBuyInit = () => {
      const client = window.ShopifyBuy.buildClient({
        domain: '04e898-73.myshopify.com',
        storefrontAccessToken: '190f3cfa01397d8be7b4cd1c3bccacb3'
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent('product', {
          id: '8376694177928',
          node: document.getElementById('product-component-1727036284976'),
          moneyFormat: '%24%20%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0',
                    'margin-bottom': '50px'
                  },
                  'text-align': 'left'
                },
                title: {
                  'font-size': '26px'
                },
                price: {
                  'font-size': '18px'
                },
                compareAt: {
                  'font-size': '15.3px'
                },
                unitPrice: {
                  'font-size': '15.3px'
                }
              },
              layout: 'horizontal',
              contents: {
                img: false,
                imgWithCarousel: true,
                description: true
              },
              width: '100%',
              text: {
                button: 'Add to cart'
              }
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true
              },
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0px',
                    'margin-bottom': '0px'
                  }
                },
                title: {
                  'font-family': 'Helvetica Neue, sans-serif',
                  'font-weight': 'bold',
                  'font-size': '26px',
                  color: '#4c4c4c'
                },
                price: {
                  'font-family': 'Helvetica Neue, sans-serif',
                  'font-weight': 'normal',
                  'font-size': '18px',
                  color: '#4c4c4c'
                },
                compareAt: {
                  'font-family': 'Helvetica Neue, sans-serif',
                  'font-weight': 'normal',
                  'font-size': '15.3px',
                  color: '#4c4c4c'
                },
                unitPrice: {
                  'font-family': 'Helvetica Neue, sans-serif',
                  'font-weight': 'normal',
                  'font-size': '15.3px',
                  color: '#4c4c4c'
                }
              },
              text: {
                button: 'Add to cart'
              }
            },
            cart: {
              text: {
                total: 'Subtotal',
                button: 'Checkout'
              }
            }
          }
        });
      });
    };

    loadShopify();
  }, []);

  return <div id="product-component-1727036284976"></div>;
};

export default ShopifyBuyButton;
