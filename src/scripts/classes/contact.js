const contactLinks = document.createElement('div')
contactLinks.id = 'contact-links'


const githubIcon = document.createElement('img')
githubIcon.src = "https://img.icons8.com/small/50/000000/github.png"
githubIcon.className = 'icon'
githubIcon.onclick = _redirect('github')

const linkedInIcon = document.createElement('img')
linkedInIcon.src = "https://image.flaticon.com/icons/png/512/174/174857.png"
linkedInIcon.className = 'icon'
linkedInIcon.onclick = _redirect('linkedin')

const angelListIcon = document.createElement('img')
angelListIcon.src = "https://findicons.com/files/icons/2779/simple_icons/2048/angellist.png"
angelListIcon.className = 'icon'
angelListIcon.onclick = _redirect('angellist')

contactLinks.append(
  githubIcon,
  linkedInIcon,
  angelListIcon
  )
  
export default contactLinks

function _redirect(site){
  return ()=>{
    switch (site) {
      case 'linkedin':
        location.href = "https://www.linkedin.com/in/isaac-wei-9945a2105/"
        return
  
      case 'github':
        location.href = "https://github.com/theonewei"
        return
      
      case 'angellist':
        location.href = "https://angel.co/u/isaac-wei"
        return
    
      default:
        break;
    }
  }
}