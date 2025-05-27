"use client"
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { subjects } from '@/constants';

const SubjectFilter = () => {
    const router = useRouter();
     
    const searchParams= useSearchParams();
    const query = searchParams.get('subject') || '';
    const [subject, setSubject] = useState(query);

  return (
    <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
  )
}

export default SubjectFilter