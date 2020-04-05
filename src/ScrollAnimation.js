const animatiedScrollObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('enter')
      animatiedScrollObserver.unobserve(entry.target)
    }
  })
})

export default {
  bind(el) {
    el.classList.add('before-enter')
    animatiedScrollObserver.observe(el)
  }
}
