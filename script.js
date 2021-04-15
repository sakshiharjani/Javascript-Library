
// options used to change the way the glide is displayed and how many to display
var glide = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap : "50px"
})

// calling the function
glide.mount()
