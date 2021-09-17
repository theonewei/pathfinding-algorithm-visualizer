const contactLinks = document.createElement('div')
contactLinks.id = 'contact-links'


const githubIcon = document.createElement('img')
githubIcon.src = "https://img.icons8.com/small/50/000000/github.png"
githubIcon.title = "Github"
githubIcon.className = 'icon'
githubIcon.onclick = _redirect('github')

const linkedInIcon = document.createElement('img')
linkedInIcon.src = "https://image.flaticon.com/icons/png/512/174/174857.png"
linkedInIcon.title = "LinkedIn"
linkedInIcon.className = 'icon'
linkedInIcon.onclick = _redirect('linkedin')

const angelListIcon = document.createElement('img')
angelListIcon.src = "https://findicons.com/files/icons/2779/simple_icons/2048/angellist.png"
angelListIcon.title = "AngelList"
angelListIcon.className = 'icon'
angelListIcon.onclick = _redirect('angellist')

const portfolioIcon = document.createElement('img')
portfolioIcon.src = "https://icons-for-free.com/iconfiles/png/512/briefcase+business+bag+documents+bag+general+office+portfolio-1320183163524913670.png"
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