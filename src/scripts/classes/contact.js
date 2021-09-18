const contactLinks = document.createElement('div')
contactLinks.id = 'contact-links'


const githubIcon = document.createElement('i')
githubIcon.title = "Github"
githubIcon.className = 'fab fa-github'
githubIcon.onclick = _redirect('github')

const linkedInIcon = document.createElement('i')
linkedInIcon.title = "LinkedIn"
linkedInIcon.className = 'fab fa-linkedin-in'
linkedInIcon.onclick = _redirect('linkedin')

const angelListIcon = document.createElement('i')
angelListIcon.title = "AngelList"
angelListIcon.className = 'fab fa-angellist'
angelListIcon.onclick = _redirect('angellist')

const portfolioIcon = document.createElement('i')
portfolioIcon.title = "Portfolio"
portfolioIcon.className = 'fas fa-portrait'
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