
import { useState, useEffect, useRef } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  Send, 
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Image,
  Clock,
  CheckCheck,
  User,
  UserPlus,
  MessageSquare
} from 'lucide-react';
import { toast } from 'sonner';

interface Contact {
  id: number;
  name: string;
  avatar: string;
  role: string;
  company: string;
  lastMessage: string;
  time: string;
  unread: boolean;
  online: boolean;
}

interface Message {
  id: number;
  senderId: number;
  text: string;
  time: string;
  status: 'sent' | 'delivered' | 'read';
  isImage?: boolean;
}

const MessagesPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeContactId, setActiveContactId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Simulate current user ID
  const currentUserId = 999;

  useEffect(() => {
    // Simulate fetching contacts
    const fetchContacts = () => {
      setLoading(true);
      
      // This would be replaced with an actual API call
      const dummyContacts: Contact[] = Array.from({ length: 15 }, (_, i) => {
        const roles = ["Investor", "Mentor", "Founder", "Co-founder", "CEO", "CTO"];
        const companies = ["TechStart", "Innova Capital", "BlueChip", "GrowthLabs", "NextGen"];
        const lastMessages = [
          "Hi there! I saw your pitch...",
          "When can we schedule a call?",
          "Thanks for the information",
          "I'd like to learn more about your startup",
          "Let's discuss your fundraising strategy",
          "Great talking to you yesterday"
        ];
        const times = ["Just now", "5m ago", "30m ago", "2h ago", "Yesterday", "2 days ago"];
        
        return {
          id: i + 1,
          name: `Contact ${i+1}`,
          avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
          role: roles[i % roles.length],
          company: companies[i % companies.length],
          lastMessage: lastMessages[i % lastMessages.length],
          time: times[i % times.length],
          unread: Math.random() > 0.7,
          online: Math.random() > 0.6
        };
      });
      
      setTimeout(() => {
        setContacts(dummyContacts);
        setActiveContactId(dummyContacts[0].id);
        setLoading(false);
        generateMessages(dummyContacts[0].id);
      }, 1000);
    };
    
    fetchContacts();
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateMessages = (contactId: number) => {
    const messageTemplates = [
      "Hi there! I saw your startup pitch and I'm interested in learning more.",
      "Can you tell me about your revenue model?",
      "I think your idea has great potential in the current market.",
      "What kind of investment are you looking for?",
      "Have you considered expanding to international markets?",
      "Your team looks impressive. How did you all meet?",
      "I'd love to schedule a call to discuss this further.",
      "What's your customer acquisition strategy?",
      "I've worked with similar startups before and have some insights to share.",
      "What are the biggest challenges you're currently facing?"
    ];
    
    // Generate conversation with 5-15 messages
    const numMessages = 5 + Math.floor(Math.random() * 10);
    const generatedMessages: Message[] = [];
    
    for (let i = 0; i < numMessages; i++) {
      const isCurrentUser = i % 2 === 0;
      const messageIndex = Math.floor(Math.random() * messageTemplates.length);
      
      generatedMessages.push({
        id: i + 1,
        senderId: isCurrentUser ? currentUserId : contactId,
        text: messageTemplates[messageIndex],
        time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
        status: isCurrentUser ? (Math.random() > 0.3 ? 'read' : 'delivered') : 'sent'
      });
    }
    
    // Add image message
    const imagePosition = Math.floor(generatedMessages.length / 2);
    generatedMessages.splice(imagePosition, 0, {
      id: numMessages + 1,
      senderId: currentUserId,
      text: "https://source.unsplash.com/random/400x300?startup",
      time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
      status: 'read',
      isImage: true
    });
    
    setMessages(generatedMessages);
  };

  const handleContactClick = (contactId: number) => {
    setActiveContactId(contactId);
    generateMessages(contactId);
    
    // Mark as read when clicked
    setContacts(prevContacts => 
      prevContacts.map(contact => 
        contact.id === contactId ? { ...contact, unread: false } : contact
      )
    );
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg: Message = {
        id: messages.length + 1,
        senderId: currentUserId,
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: 'sent'
      };
      
      setMessages([...messages, newMsg]);
      setNewMessage('');
      
      // Simulate reply after a short delay
      setTimeout(() => {
        const replyMessages = [
          "That sounds interesting! Tell me more.",
          "I agree with your approach.",
          "Let me think about that and get back to you.",
          "Can we schedule a call to discuss this in detail?",
          "Thanks for sharing that information."
        ];
        
        const reply: Message = {
          id: messages.length + 2,
          senderId: activeContactId!,
          text: replyMessages[Math.floor(Math.random() * replyMessages.length)],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          status: 'sent'
        };
        
        setMessages(prev => [...prev, reply]);
      }, 2000);
    }
  };

  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    contact.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeContact = contacts.find(contact => contact.id === activeContactId);

  const handleVideoCall = () => {
    toast.success(`Starting video call with ${activeContact?.name}...`);
  };

  const handleVoiceCall = () => {
    toast.success(`Starting voice call with ${activeContact?.name}...`);
  };

  const handleNewChat = () => {
    toast.success("Creating a new conversation...");
  };

  return (
    <Layout showSidebar={true}>
      <div className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Contacts sidebar */}
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Messages</h2>
              <Button size="icon" variant="ghost" onClick={handleNewChat}>
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search contacts..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" className="flex-1 flex flex-col">
            <div className="px-2 pt-2">
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                <TabsTrigger value="unread" className="flex-1">Unread</TabsTrigger>
                <TabsTrigger value="important" className="flex-1">Important</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="flex-1 overflow-y-auto">
              {loading ? (
                <div className="space-y-2 p-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center p-2 gap-3 animate-pulse">
                      <div className="w-10 h-10 rounded-full bg-muted"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-muted rounded w-20 mb-2"></div>
                        <div className="h-3 bg-muted rounded w-32"></div>
                      </div>
                      <div className="h-3 bg-muted rounded w-10"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-2">
                  {filteredContacts.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      No contacts match your search
                    </div>
                  ) : (
                    filteredContacts.map((contact) => (
                      <div 
                        key={contact.id}
                        className={`flex items-center p-2 rounded-md gap-3 cursor-pointer ${
                          activeContactId === contact.id ? 'bg-muted' : 'hover:bg-muted/50'
                        } ${contact.unread ? 'font-medium' : ''}`}
                        onClick={() => handleContactClick(contact.id)}
                      >
                        <div className="relative">
                          <Avatar>
                            <AvatarImage src={contact.avatar} alt={contact.name} />
                            <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          {contact.online && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <p className="truncate text-sm">{contact.name}</p>
                            <p className="text-xs text-muted-foreground whitespace-nowrap">{contact.time}</p>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>
                        </div>
                        {contact.unread && (
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="unread" className="flex-1 overflow-y-auto">
              <div className="p-2">
                {contacts.filter(c => c.unread).length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    No unread messages
                  </div>
                ) : (
                  contacts.filter(c => c.unread).map((contact) => (
                    <div 
                      key={contact.id}
                      className={`flex items-center p-2 rounded-md gap-3 cursor-pointer ${
                        activeContactId === contact.id ? 'bg-muted' : 'hover:bg-muted/50'
                      } font-medium`}
                      onClick={() => handleContactClick(contact.id)}
                    >
                      <Avatar>
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <p className="truncate text-sm">{contact.name}</p>
                          <p className="text-xs text-muted-foreground">{contact.time}</p>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{contact.lastMessage}</p>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="important" className="flex-1 overflow-y-auto">
              <div className="text-center py-8 text-muted-foreground">
                Mark messages as important to see them here
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Chat area */}
        <div className="flex-1 flex flex-col">
          {activeContact ? (
            <>
              {/* Chat header */}
              <div className="p-4 border-b flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={activeContact.avatar} alt={activeContact.name} />
                    <AvatarFallback>{activeContact.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{activeContact.name}</h3>
                    <p className="text-xs text-muted-foreground">{activeContact.role} at {activeContact.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" onClick={handleVoiceCall}>
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={handleVideoCall}>
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
                {messages.map((message) => {
                  const isCurrentUser = message.senderId === currentUserId;
                  
                  return (
                    <div 
                      key={message.id}
                      className={`flex mb-4 ${isCurrentUser ? 'justify-end' : ''}`}
                    >
                      {!isCurrentUser && (
                        <Avatar className="mr-2 mt-1">
                          <AvatarImage src={activeContact.avatar} alt={activeContact.name} />
                          <AvatarFallback>{activeContact.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div className={`max-w-[80%]`}>
                        {message.isImage ? (
                          <div className={`rounded-lg overflow-hidden ${
                            isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-background border'
                          }`}>
                            <img 
                              src={message.text} 
                              alt="Shared image" 
                              className="w-full h-auto max-h-60 object-cover"
                            />
                          </div>
                        ) : (
                          <div className={`p-3 rounded-lg ${
                            isCurrentUser ? 'bg-primary text-primary-foreground' : 'bg-background border'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                          </div>
                        )}
                        <div className={`flex items-center mt-1 text-xs text-muted-foreground ${
                          isCurrentUser ? 'justify-end' : ''
                        }`}>
                          <span>{message.time}</span>
                          {isCurrentUser && (
                            <span className="ml-1">
                              {message.status === 'read' ? (
                                <CheckCheck className="h-3 w-3 text-green-500" />
                              ) : message.status === 'delivered' ? (
                                <CheckCheck className="h-3 w-3" />
                              ) : (
                                <Clock className="h-3 w-3" />
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message input */}
              <div className="p-4 border-t flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Image className="h-5 w-5" />
                </Button>
                <Input 
                  placeholder="Type a message..." 
                  className="flex-1"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <User className="h-16 w-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-medium mb-2">Select a conversation</h2>
              <p className="text-muted-foreground mb-6">Choose a contact to start messaging</p>
              <Button onClick={handleNewChat}>
                <UserPlus className="h-5 w-5 mr-2" />
                Start a new conversation
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MessagesPage;
