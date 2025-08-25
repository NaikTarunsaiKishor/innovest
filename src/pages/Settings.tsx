
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  Bell, Shield, CircleUser, CreditCard, Globe, LifeBuoy, Lock, 
  Trash2, Mail, Smartphone, Info, CheckCircle, AlertTriangle, X
} from 'lucide-react';

const Settings = () => {
  return (
    <Layout showSidebar>
      <div className="container py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>
        
        <Tabs defaultValue="profile">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <TabsList className="flex flex-col h-auto bg-transparent space-y-1">
                <TabsTrigger 
                  value="profile" 
                  className="w-full justify-start px-3"
                >
                  <CircleUser className="w-4 h-4 mr-2" />
                  Profile
                </TabsTrigger>
                <TabsTrigger 
                  value="account" 
                  className="w-full justify-start px-3"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Account
                </TabsTrigger>
                <TabsTrigger 
                  value="notifications" 
                  className="w-full justify-start px-3"
                >
                  <Bell className="w-4 h-4 mr-2" />
                  Notifications
                </TabsTrigger>
                <TabsTrigger 
                  value="billing" 
                  className="w-full justify-start px-3"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Billing
                </TabsTrigger>
                <TabsTrigger 
                  value="security" 
                  className="w-full justify-start px-3"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Security
                </TabsTrigger>
                <TabsTrigger 
                  value="integrations" 
                  className="w-full justify-start px-3"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Integrations
                </TabsTrigger>
                <TabsTrigger 
                  value="help" 
                  className="w-full justify-start px-3"
                >
                  <LifeBuoy className="w-4 h-4 mr-2" />
                  Help & Support
                </TabsTrigger>
              </TabsList>
              <div className="mt-6">
                <Button variant="destructive" className="w-full">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <TabsContent value="profile" className="space-y-8 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>Manage your profile information visible to others</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center overflow-hidden border">
                          <img 
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&auto=format&fit=crop&q=80"
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Profile Photo</h3>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Change Photo</Button>
                          <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="Aditya Kumar" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="adityak" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="aditya@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+91 98765 43210" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea 
                        id="bio" 
                        className="w-full min-h-24 p-2 rounded-md border bg-background"
                        defaultValue="Angel investor with 10+ years of experience in tech startups. Passionate about sustainable innovation and AI solutions."
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="Bangalore, India" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" defaultValue="https://adityakumar.com" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Save Profile</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Professional Information</CardTitle>
                    <CardDescription>Update your professional and investment details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input id="company" defaultValue="Horizon Ventures" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input id="position" defaultValue="Managing Partner" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Primary Industry</Label>
                        <Input id="industry" defaultValue="Financial Services" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Investment Experience</Label>
                        <Input id="experience" defaultValue="10+ years" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Save Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="account" className="space-y-8 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Preferences</CardTitle>
                    <CardDescription>Configure account settings and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Email Communication</Label>
                        <p className="text-sm text-muted-foreground">Receive system notifications and updates via email</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Desktop Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive desktop notifications for new messages and updates</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Public Profile</Label>
                        <p className="text-sm text-muted-foreground">Make your profile visible to other users on the platform</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Private Mode</Label>
                        <p className="text-sm text-muted-foreground">Browse opportunities without revealing your identity</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Email Addresses</CardTitle>
                    <CardDescription>Manage your email addresses</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>aditya@example.com</span>
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                          Primary
                        </span>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        Primary
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>aditya.kumar@horizonventures.com</span>
                        <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground ring-1 ring-inset ring-muted-foreground/20">
                          Work
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Make Primary</Button>
                        <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        <span>Add another email</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Phone Numbers</CardTitle>
                    <CardDescription>Manage your phone numbers</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-4 w-4" />
                        <span>+91 98765 43210</span>
                        <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                          Primary
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" disabled>
                          Primary
                        </Button>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        <span>Add another phone</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="notifications" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Investment Opportunities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="new-opportunities" defaultChecked />
                          <Label htmlFor="new-opportunities">New Opportunities</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="opportunity-updates" defaultChecked />
                          <Label htmlFor="opportunity-updates">Updates to Tracked Opportunities</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="funding-rounds" defaultChecked />
                          <Label htmlFor="funding-rounds">New Funding Rounds</Label>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Messages & Connections</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="new-messages" defaultChecked />
                          <Label htmlFor="new-messages">New Messages</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="connection-requests" defaultChecked />
                          <Label htmlFor="connection-requests">Connection Requests</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="mentions" />
                          <Label htmlFor="mentions">Mentions</Label>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">System</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2">
                          <Switch id="security-alerts" defaultChecked />
                          <Label htmlFor="security-alerts">Security Alerts</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="product-updates" />
                          <Label htmlFor="product-updates">Product Updates</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="newsletter" />
                          <Label htmlFor="newsletter">Newsletter</Label>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Notification Channels</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="font-medium">Notification Type</div>
                          <div className="font-medium text-center">Email</div>
                          <div className="font-medium text-center">Mobile Push</div>
                        </div>
                        
                        <Separator />
                        
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div>New Investment Opportunities</div>
                          <div className="flex justify-center">
                            <Switch id="email-new-opportunities" defaultChecked />
                          </div>
                          <div className="flex justify-center">
                            <Switch id="push-new-opportunities" defaultChecked />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div>Messages</div>
                          <div className="flex justify-center">
                            <Switch id="email-messages" defaultChecked />
                          </div>
                          <div className="flex justify-center">
                            <Switch id="push-messages" defaultChecked />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div>Security Alerts</div>
                          <div className="flex justify-center">
                            <Switch id="email-security" defaultChecked />
                          </div>
                          <div className="flex justify-center">
                            <Switch id="push-security" defaultChecked />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 items-center">
                          <div>System Announcements</div>
                          <div className="flex justify-center">
                            <Switch id="email-announcements" />
                          </div>
                          <div className="flex justify-center">
                            <Switch id="push-announcements" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button>Save Preferences</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="billing" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Subscription</CardTitle>
                    <CardDescription>Manage your subscription and billing information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-card border rounded-lg p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold flex items-center">
                            Premium Plan
                            <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 ml-2">
                              Current
                            </span>
                          </h3>
                          <p className="text-muted-foreground">Billed Annually</p>
                        </div>
                        <div>
                          <p className="text-xl font-bold">₹24,000<span className="text-sm font-normal text-muted-foreground">/year</span></p>
                        </div>
                      </div>
                      
                      <Separator className="my-6" />
                      
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Unlimited investment opportunities</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Premium analytics and reports</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Early access to high-potential startups</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          <span>Dedicated relationship manager</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-6">
                        <Button variant="outline">Change Plan</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                      <div className="flex items-center justify-between border rounded-md p-4">
                        <div className="flex items-center">
                          <div className="bg-muted w-10 h-6 rounded flex items-center justify-center mr-4">
                            <span className="text-xs font-bold">VISA</span>
                          </div>
                          <div>
                            <p>•••• •••• •••• 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                          </div>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Button variant="outline" className="w-full">
                          Add Payment Method
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Billing Information</h3>
                      <div className="border rounded-md p-4">
                        <p>Aditya Kumar</p>
                        <p>Horizon Ventures</p>
                        <p>123 Business Park, Koramangala</p>
                        <p>Bangalore, Karnataka 560034</p>
                        <p>India</p>
                        <p>GST: 29ABCDE1234F1Z5</p>
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm">Edit Billing Information</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Billing History</h3>
                      <div className="border rounded-md divide-y">
                        {[
                          { date: "Apr 1, 2025", amount: "₹24,000", status: "Paid", invoice: "INV-2025-001" },
                          { date: "Apr 1, 2024", amount: "₹24,000", status: "Paid", invoice: "INV-2024-001" },
                          { date: "Apr 1, 2023", amount: "₹20,000", status: "Paid", invoice: "INV-2023-001" }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-4">
                            <div>
                              <p className="font-medium">{item.date}</p>
                              <p className="text-sm text-muted-foreground">Invoice #{item.invoice}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{item.amount}</p>
                              <p className="text-sm flex items-center justify-end">
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                  {item.status}
                                </span>
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-8 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>Change your password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <div className="flex justify-end">
                      <Button>Update Password</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Protect your account with an additional verification step</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="pt-4">
                      <Button variant="outline" className="w-full" disabled>
                        Set Up Two-Factor Authentication
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Login Sessions</CardTitle>
                    <CardDescription>Manage your active login sessions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-md divide-y">
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <div className="mr-4 p-2 bg-primary/10 rounded-full">
                            <Laptop className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">MacBook Pro</p>
                            <p className="text-sm text-muted-foreground">Bangalore, India • Now</p>
                          </div>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            Current
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <div className="mr-4 p-2 bg-primary/10 rounded-full">
                            <Smartphone className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">iPhone 15 Pro</p>
                            <p className="text-sm text-muted-foreground">Bangalore, India • 2 days ago</p>
                          </div>
                        </div>
                        <div>
                          <Button variant="outline" size="sm">Sign Out</Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center">
                          <div className="mr-4 p-2 bg-primary/10 rounded-full">
                            <Tablet className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">iPad Air</p>
                            <p className="text-sm text-muted-foreground">Mumbai, India • 5 days ago</p>
                          </div>
                        </div>
                        <div>
                          <Button variant="outline" size="sm">Sign Out</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="outline" className="text-destructive hover:text-destructive">
                        Sign Out All Devices
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="integrations" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Integrations</CardTitle>
                    <CardDescription>Connect your InnoVest account with other services</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        name: "Google Calendar",
                        description: "Sync your schedule and never miss an investor meeting",
                        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Calendar_icon_%282020%29.svg",
                        connected: true
                      },
                      {
                        name: "LinkedIn",
                        description: "Import your professional network and share updates",
                        icon: "https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png",
                        connected: true
                      },
                      {
                        name: "DocuSign",
                        description: "Streamline document signing for investment agreements",
                        icon: "https://www.docusign.com/sites/default/files/docusign-application-icon.png",
                        connected: false
                      },
                      {
                        name: "Microsoft Teams",
                        description: "Schedule and join virtual meetings directly from InnoVest",
                        icon: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg",
                        connected: false
                      },
                      {
                        name: "PitchBook",
                        description: "Access comprehensive company and market data",
                        icon: "https://www.pitchbook.com/css/images/icon-pitchbook.png",
                        connected: false
                      }
                    ].map((integration, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-background border">
                            <img 
                              src={integration.icon} 
                              alt={integration.name} 
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{integration.name}</p>
                            <p className="text-sm text-muted-foreground">{integration.description}</p>
                          </div>
                        </div>
                        <div>
                          {integration.connected ? (
                            <div className="flex items-center gap-2">
                              <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                Connected
                              </span>
                              <Button variant="outline" size="sm">Disconnect</Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm">Connect</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>API Access</CardTitle>
                    <CardDescription>Manage API keys for programmatic access</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium">Personal API Key</h3>
                          <p className="text-sm text-muted-foreground">Created on March 15, 2025</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-600/20">
                            Active
                          </span>
                          <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">Revoke</Button>
                        </div>
                      </div>
                      <div className="relative">
                        <Input 
                          value="••••••••••••••••••••••••••••••••••••••••"
                          readOnly
                          className="pr-20"
                        />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="absolute right-1 top-1 h-7"
                        >
                          Copy
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">Need another API key for a specific project?</p>
                      <Button variant="outline" size="sm">Generate New Key</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="help" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Help & Support</CardTitle>
                    <CardDescription>Get help and learn more about using InnoVest</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-6">
                        <div className="mb-4">
                          <Info className="h-8 w-8 text-primary mb-2" />
                          <h3 className="text-lg font-medium">Knowledge Base</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Explore our comprehensive guides and documentation to learn how to make the most of InnoVest.
                        </p>
                        <Button variant="outline" className="w-full">
                          Browse Articles
                        </Button>
                      </div>
                      
                      <div className="border rounded-lg p-6">
                        <div className="mb-4">
                          <MessageSquare className="h-8 w-8 text-primary mb-2" />
                          <h3 className="text-lg font-medium">Contact Support</h3>
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Need personalized assistance? Our support team is ready to help you with any questions.
                        </p>
                        <Button variant="outline" className="w-full">
                          Open Support Ticket
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-4">Frequently Asked Questions</h3>
                      <div className="space-y-4">
                        {[
                          {
                            question: "How do I connect with investors?",
                            answer: "You can search for investors in our network directory and send them connection requests. Once connected, you can message them directly through our platform."
                          },
                          {
                            question: "What fees does InnoVest charge?",
                            answer: "InnoVest charges a 2% platform fee on successful funding transactions. Premium subscribers receive discounted fees of 1.5%. There are no hidden charges or upfront costs."
                          },
                          {
                            question: "How are startups vetted on the platform?",
                            answer: "All startups undergo a comprehensive review process that evaluates the team, business model, market potential, and financial projections before being approved for the platform."
                          }
                        ].map((faq, index) => (
                          <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                            <h4 className="font-medium mb-2">{faq.question}</h4>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </Layout>
  );
};

// Additional components used in the page
const Laptop = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
    </svg>
  );
};

const Tablet = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
      <line x1="12" x2="12.01" y1="18" y2="18"></line>
    </svg>
  );
};

const MessageSquare = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
};

export default Settings;
