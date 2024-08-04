import { useState, useEffect } from 'react';
import { DataResponse, WaterResult } from '../models/models';
import { checkNegative, checkPositive, fetchMain, notePositive, postOnionName, waterNegative, waterPositive } from '../api/main.api';

export const useMain = () => {
    const [mainData, setMainData] = useState<DataResponse>();
    const [waterResult, setWaterResult] = useState<WaterResult | undefined>(undefined);

    useEffect(() => {
        fetchMain().then((response) => {
            setMainData(response);
        }).catch((error) => {
            console.error('Failed to fetch main data in useMain', error);
        });
    }, []);

    const NotePositive = (note: string) => {
        notePositive(note).then((response) => {
            return response
        })
    };

    const WaterPositive = async () => {
        try {
            const response = await waterPositive();
            setWaterResult(response);
            console.log('waterResult훅', waterResult)
        } catch (error) {
            console.error('Error fetching positive water result', error);
        }
    };

    const WaterNegative = async () => {
        try {
            const response = await waterNegative();
            setWaterResult(response);
            console.log('waterResult훅', waterResult)
        } catch (error) {
            console.error('Error fetching negative water result', error);
        }
    };

    const CheckPositive = async (note: string) => {
        try {
            const response = await checkPositive(note);
            return response.data;
        } catch (error) {
            console.error('CheckPositive Error:', error);
            throw error;
        }
    };

    const CheckNegative = async (note: string) => {
        try {
            const response = await checkNegative(note);
            return response.data;
        } catch (error) {
            console.error('CheckNegative Error:', error);
            throw error;
        }
    };

    const setOnionName = async (name: string) => {
        try {
            await postOnionName(name);
            const updatedData = await fetchMain();
            setMainData(updatedData);
        } catch (error) {
            console.error('Error setting onion name:', error);
        }
    };

    return { mainData, NotePositive, WaterPositive, WaterNegative, CheckPositive, CheckNegative, waterResult, setOnionName };
};