"use client"
import { addBookmark, removeBookmark } from '@/lib/actions/companion.action';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface CompanionCardProps {
  id: string;
  name: string;
  subject: string;
  topic: string;
  duration: number;
  color: string;
  bookmarked: boolean;
}
const CompanionCard = ({id,name,topic,subject,duration,color,bookmarked}:CompanionCardProps) => {
  console.log(id,name,topic,subject,duration,color)
  const pathname= usePathname();

  const handleBookmark = async() => {
    if(bookmarked){
      // remove from bookmarked
      await removeBookmark(id, pathname);
    }else{
      // add to bookmarked
      await addBookmark(id, pathname);
    }
  }
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark" onClick={handleBookmark}>
          <Image
            src={"/icons/bookmark.svg"
            }
            alt="bookmark"
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm">{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  )
}

export default CompanionCard