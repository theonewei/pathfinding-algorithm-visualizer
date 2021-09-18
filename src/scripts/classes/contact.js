const contactLinks = document.createElement('div')
contactLinks.id = 'contact-links'


const githubIcon = document.createElement('img')
githubIcon.src = "/images/github.png"
githubIcon.title = "Github"
githubIcon.className = 'icon'
githubIcon.onclick = _redirect('github')

const linkedInIcon = document.createElement('img')
linkedInIcon.src = "/images/linkedin.png"
linkedInIcon.title = "LinkedIn"
linkedInIcon.className = 'icon'
linkedInIcon.onclick = _redirect('linkedin')

const angelListIcon = document.createElement('img')
angelListIcon.src = "/images/angellist.png"
angelListIcon.title = "AngelList"
angelListIcon.className = 'icon'
angelListIcon.onclick = _redirect('angellist')

const portfolioIcon = document.createElement('img')
portfolioIcon.src = "/images/portfolio.png"
portfolioIcon.title = "Portfolio"
portfolioIcon.className = 'icon'
portfolioIcon.onclick = _redirect('portfolio')

contactLinks.append(
  portfolioIcon,
  githubIcon,
  linkedInIcon,
  angelListIcon,
  )
  
export default contactLinks

function _redirect(site){
  return ()=>{
    switch (site) {
      case 'linkedin':
        window.open("https://www.linkedin.com/in/isaac-wei-9945a2105/","_blank")
        return
  
      case 'github':
        window.open("https://github.com/theonewei",'_blank')
        return
      
      case 'angellist':
        window.open("https://angel.co/u/isaac-wei",'_blank')
        return

      case 'portfolio':
        window.open("https://isaacwei.dev/#home",'_blank')
        return
    
      default:
        break;
    }
  }
}