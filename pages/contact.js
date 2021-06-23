import React from 'react';
import ContainerFull from '@/components/ContainerFull';
import Friends from '@/section/Contact/Friends';
import Form from '@/section/Contact/Form';

export default function Contact() {
  return (
    <ContainerFull >
       <Friends />
       <Form />
    </ContainerFull>
  )
}