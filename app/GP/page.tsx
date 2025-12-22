'use client'
import React from 'react'
import GPImageSection from '@/app/components/GP/GPImageSection'

import Navbar from '../components/Navbar'
import GPsUtiliseSection from '../components/GP/GPsUtiliseSection'
import ImagingReferralSection from '../components/GP/ImagingReferralSection'
import GPUtilise from '../components/GP/GPUtilise'
import SpecialistConsultations from '../components/GP/SpecialistConsultations'
import { MainFooter } from '../components/footer/Footer'

const GP = () => {
    return (
        <>
            <Navbar />
            <div className="pb-[60px]">
                <GPImageSection />
            </div>

            <GPsUtiliseSection />
            <ImagingReferralSection />
            <GPUtilise />
            <SpecialistConsultations />
            <MainFooter />
        </>
    )
}

export default GP