import React from 'react'
import Image from 'next/image'

export interface SearchInputProps {
  searchText?: string,
  setSearchText?: any,
  placeholder?: string,
  full?: any,
  className?: string,
  onlyNumber?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({ searchText, setSearchText, placeholder, full, className, onlyNumber = false }) => (
  <div className={`w-full h-12 flex items-center py-2 px-8 transition duration-200 ease-in-out border border-gray-300 relative ${className} line-height-6 p-2 transition duration-200 ease-in-out border-1 border-solid border-gray-300 cursor-text flex items-center rounded-lg border`}>
    <Image className='absolute w-6 h-6 pointer-events-none left-3' alt='' src='/images/svgs/search.svg' width={24} height={24} />
    <input
      type={onlyNumber ? 'number' : 'text'}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder={placeholder}
      className='pl-[41px] w-full bg-white/50 p-6 rounded-3xl flex justify-between'
    />
  </div>
)

export default SearchInput
