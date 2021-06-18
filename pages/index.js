import React from 'react';
import ContainerFull from '@/components/ContainerFull';
import More from '@/components/Index/More';
import Top from '@/components/Index/Top';
import MoreInstagram from '@/components/Index/MoreInstagram';

export default function Home() {
  return <ContainerFull>
            <Top />
            <More />
            <MoreInstagram />
         </ContainerFull>
}
