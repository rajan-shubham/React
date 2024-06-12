## Talk is cheap so me the code

### App Layout
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
                        - cuisines, delivery time
            3) Footer
                - Links
                - Copyrights
       
*/

- // React Props --> Properties (it is something which you can pass to the component)
- // Props is just a normal arguments to a function
- // component is just like a function in the programm (so that we can reuse it)

- // Key in every card should be there uniquely when we looping through map functon, WHY?
- // same level component in DOM, these needs to be represented uniquely with there ID, because if a new restrauntCard will come and inserted in first of all cards
- // then React will reRender all these cards if all cards have no unique id
- // as react does not know which ResCard is new, React cannot uniquely identifi these cards
- // Recomondation: don't use key(unique id) as index of an element of an array(as it is ANTI PATTERN) instead use unique id for every element.