"use client"

import Image from 'next/image';

import CustomButton from './CustomButton';

import { fetchScores, formatDate, convertToCST } from '@/utils';

import { useState } from 'react';
import { scoreProps } from '@/types';

interface scoreCardProps {
    weeklyscores: scoreProps
}

const Scores = ({ weeklyscores }: scoreCardProps) => {
    const { commence_time, home_team, away_team, scores } = weeklyscores


    console.log(scores);
    return (
        <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl;
    }">
            <div className="w-full flex justify-between items-start gap-2">
                <div className="text-[22px] leading-[26px] font-bold capitalize">
                    <div className="w-full flex justify-between items-start gap-2">
                        <h2>
                            {formatDate(commence_time)}
                        </h2>
                        <p>
                            {convertToCST(commence_time)}
                        </p>
                    </div>
                    <div>
                        <p>
                            {away_team} @ {home_team}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scores
