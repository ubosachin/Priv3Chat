"use client"

import { useState } from "react"
import { Moon, Sun, Wallet2, Search, Send, PlusCircle, ImageIcon, Smile } from "lucide-react"
import { Button } from "./ui/button"

export default function Chat() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedChat, setSelectedChat] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [message, setMessage] = useState("")

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const chats = [
    { id: "1", name: "CryptoWhale", lastMessage: "Did you see the latest NFT drop?", avatar: "/avatar1.png" },
    { id: "2", name: "BlockchainDev", lastMessage: "Let's discuss the new DeFi protocol", avatar: "/avatar2.png" },
    { id: "3", name: "TokenTrader", lastMessage: "What's your take on the market?", avatar: "/avatar3.png" },
  ]

  const filteredChats = chats.filter((chat) => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message)
      setMessage("")
    }
  }

  return (
    <div className={`flex flex-col md:flex-row h-screen ${isDarkMode ? "dark" : ""} bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500`}>
      {/* Sidebar */}
      <div className="w-full md:w-1/3 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Priv3chat
          </h1>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users"
              className="w-full pl-8 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 dark:bg-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="overflow-y-auto h-[calc(100vh-8rem)]">
          {filteredChats.map((chat) => (
            <div
              key={chat.id}
              className={`p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer ${
                selectedChat === chat.id ? "bg-gray-200 dark:bg-gray-600" : ""
              }`}
              onClick={() => setSelectedChat(chat.id)}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600" />
                <div>
                  <p className="font-semibold">{chat.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{chat.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 relative">
        {/* Connect Wallet Button */}
        <div className="absolute top-4 right-4 hidden md:block">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <Wallet2 className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>

        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold">
                {chats.find(chat => chat.id === selectedChat)?.name}
              </h2>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <p className="text-gray-500 dark:text-gray-400">
                No messages yet. Start the conversation!
              </p>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center space-x-2">
              <textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 w-full md:w-auto"
                rows="1"
              />
              <Button onClick={handleSendMessage} className="rounded-full">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-center p-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                Welcome to Web3 Chat
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Connect your wallet and start chatting in the decentralized world
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Start Chatting
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}