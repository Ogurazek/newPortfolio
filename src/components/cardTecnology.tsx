import type { LucideIcon } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type CardTecnologyProps = {
    url: string;
    Icon: LucideIcon;
    title: string;
}

export function CardTecnology({ url, Icon, title }: CardTecnologyProps) {
    return (
        <>
            <a data-tooltip-id="my-tooltip" data-tooltip-content={title} href={url} target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 '>
                <Icon size={32} color='lightblue' />
            </a>
            <Tooltip id="my-tooltip" />
        </>
    );
}
