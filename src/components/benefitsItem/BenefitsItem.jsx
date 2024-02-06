import SubtitleP from "../subtitleP/SubtitleP";

function BenefitsItem({icon, text=''}) {
    return ( 
        <li className="flex items-center gap-x-4">
            <div className="w-10 h-10 bg-accentBlue flex items-center justify-center rounded-icon">
                <img src={icon} alt={text} />
            </div>
            <SubtitleP fontWeight={'font-regular'} lineHeight={'leading-30px'}>{text}</SubtitleP>
        </li>
     );
}

export default BenefitsItem;