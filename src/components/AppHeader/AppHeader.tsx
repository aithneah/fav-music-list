import React from 'react'
import { Language } from '../../helpers'
import './AppHeader.css'
import logo from '../../graphics/Logo.png'
import langPL from '../../graphics/langPL.png'
import langEN from '../../graphics/langEN.png'

interface AppHeaderProps {
    lang: Language,
    setSelectedLanguage: (lang: Language) => void,
}

function AppHeader(props: AppHeaderProps) {
    return (<div className='header'>
        <img src={logo} alt="Logo" />
        <div className='languageBox'>
            <img src={langPL} alt="PL" className={'languageIcon ' + (props.lang === Language.PL ? 'languageSelected' : '')} onClick={() => props.setSelectedLanguage(Language.PL)} />
            <img src={langEN} alt="EN" className={'languageIcon ' + (props.lang === Language.EN ? 'languageSelected' : '')} onClick={() => props.setSelectedLanguage(Language.EN)} />
        </div>
    </div>)
}

export default AppHeader