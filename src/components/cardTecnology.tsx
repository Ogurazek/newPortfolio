import type { LucideIcon } from 'lucide-react';

type CardTecnologyProps = {
    url: string;
    Icon: LucideIcon;
}

export function CardTecnology({ url, Icon }: CardTecnologyProps) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'>
            <Icon size={32} color='lightblue' />
        </a>
    );
}

interface CardTecnologiesProps {
    url: string;
    img: string;
}

export function CardTecnologies({ url, img }: CardTecnologiesProps) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'>
            <img src={img} alt="Icon Tecnology" />
        </a>
    );
}