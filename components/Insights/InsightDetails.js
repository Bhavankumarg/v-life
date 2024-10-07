"use client"

import Header from "@/components/Header/Header"
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

import { FacebookIcon, LinkedinIcon, XIcon } from "react-share"
import { linkIcon } from "@/utils/icon"

const InsightDetails = ({ myUrl }) => {
  const [insightsData, setInsightsData] = useState([])
  const [copySuccess, setCopySuccess] = useState(false)

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://cms.org.in/insights/${myUrl}`)
    setCopySuccess(true)

    setTimeout(() => {
      setCopySuccess(false)
    }, 3000)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://docs.cms.org.in/wp-json/wp/v2/posts?_embed&slug=${myUrl}`
        )
        console.log(response.data)

        const formattedData = response.data.map((item) => ({
          id: item.id,
          imageUrl: item.acf?.post_desktop_images?.url || "/postBanner.png",
          category: item.categories.includes(1) ? "Blog" : "Blog", // Adjust based on actual categories
          title: item.title.rendered,
          content: item.content.rendered,
          desc: item.excerpt.rendered.replace(/<[^>]+>/g, ""), // Remove HTML tags
          metaTitle: item.acf.meta_title,
          metaDesc: item.acf.meta_description,
        }))

        setInsightsData(formattedData)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [myUrl])

  return (
    <>
      {insightsData.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex flex-col justify-end h-[320px] md:h-[400px] w-full bg-center bg-cover py-10 bg-[url('/insights/blogs/banner.png')]">
              <Header />
              <div className="flex justify-center content-container">
                <h1
                  className="text-xl sm:text-4xl md:text-5xl font-semibold text-white text-center px-10"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </div>
            </div>

            <div className="bg-cms-secondary-green flex justify-center pt-5 pb-10">
              <div className="bg-white flex flex-col py-5 px-3 md:py-10 md:px-16">
                <Image
                  src={item.imageUrl}
                  width={1000}
                  height={390}
                  alt="blog banner"
                />

                <div className="flex justify-end items-center space-x-4 mt-3">
                  <p className="text-[#1A1A1A] text-lg">Share on</p>

                  <FacebookShareButton url={myUrl} quote={item.title}>
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <TwitterShareButton url={myUrl} title={item.title}>
                    <XIcon size={32} round />
                  </TwitterShareButton>

                  <LinkedinShareButton url={myUrl} title={item.title}>
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>

                  <button onClick={handleCopyLink}>{linkIcon}</button>

                  {/* Pop-up for 'Link copied!' */}
                  {copySuccess && (
                    <span
                      className="ml-2 text-cms-primary-green fixed bottom-10 right-10 p-2 bg-white border border-green-500 rounded-md shadow-lg transition-opacity duration-1000 ease-in-out opacity-100"
                      style={{
                        animation: "fadeOut 1s forwards",
                        animationDelay: "2s",
                      }}
                    >
                      Link copied!
                    </span>
                  )}
                </div>

                <div className="border-b border-cms-primary-green w-full mt-4" />
                <div className="py-7 max-w-screen-md content-container">
                  <p dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default InsightDetails
