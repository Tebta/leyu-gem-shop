"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Sparkles, Clock, Shield } from "lucide-react"

export default function CustomOrdersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    material: "",
    budget: "",
    timeline: "",
    description: "",
    inspiration: "",
    hasDesign: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Custom order submitted:", formData)
    alert("Thank you for your custom order request! Our design team will contact you within 24 hours.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      material: "",
      budget: "",
      timeline: "",
      description: "",
      inspiration: "",
      hasDesign: false,
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#8B612E] to-[#A67C52] text-white">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Custom Jewelry Design</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Bring your vision to life with our master craftsmen. From engagement rings to family heirlooms, we create
            one-of-a-kind pieces that tell your unique story.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Custom Order Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Start Your Custom Design</CardTitle>
              <p className="text-gray-600">Tell us about your dream piece and we'll make it reality.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Jewelry Category *</Label>
                    <Select onValueChange={(value) => handleSelectChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ring">Ring</SelectItem>
                        <SelectItem value="necklace">Necklace</SelectItem>
                        <SelectItem value="earrings">Earrings</SelectItem>
                        <SelectItem value="bracelet">Bracelet</SelectItem>
                        <SelectItem value="pendant">Pendant</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Material</Label>
                    <Select onValueChange={(value) => handleSelectChange("material", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gold-14k">14K Gold</SelectItem>
                        <SelectItem value="gold-18k">18K Gold</SelectItem>
                        <SelectItem value="white-gold">White Gold</SelectItem>
                        <SelectItem value="rose-gold">Rose Gold</SelectItem>
                        <SelectItem value="platinum">Platinum</SelectItem>
                        <SelectItem value="silver">Sterling Silver</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Budget Range</Label>
                    <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                        <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                        <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000+">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Timeline</Label>
                    <Select onValueChange={(value) => handleSelectChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need it?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2-weeks">2 weeks</SelectItem>
                        <SelectItem value="1-month">1 month</SelectItem>
                        <SelectItem value="2-months">2 months</SelectItem>
                        <SelectItem value="3-months">3+ months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Design Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={4}
                    placeholder="Describe your vision in detail. Include style preferences, stone types, size requirements, etc."
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="inspiration">Inspiration or Reference</Label>
                  <Textarea
                    id="inspiration"
                    name="inspiration"
                    rows={3}
                    placeholder="Any specific pieces, styles, or images that inspire your design?"
                    value={formData.inspiration}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasDesign"
                    checked={formData.hasDesign}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, hasDesign: checked as boolean }))}
                  />
                  <Label htmlFor="hasDesign">I have design sketches or images to share</Label>
                </div>

                {formData.hasDesign && (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 mb-2">Upload your design files</p>
                    <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
                    <Button type="button" variant="outline" className="mt-4 bg-transparent">
                      Choose Files
                    </Button>
                  </div>
                )}

                <Button type="submit" className="w-full bg-[#8B612E] hover:bg-[#8B612E]/90 text-lg py-3">
                  Submit Custom Order Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Process & Gallery */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Design Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B612E] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold">Consultation</h3>
                    <p className="text-gray-600 text-sm">
                      We discuss your vision, preferences, and requirements in detail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B612E] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold">Design & Approval</h3>
                    <p className="text-gray-600 text-sm">
                      Our designers create detailed sketches and 3D renderings for your approval.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B612E] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold">Crafting</h3>
                    <p className="text-gray-600 text-sm">
                      Master craftsmen bring your design to life using traditional techniques.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#8B612E] text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold">Delivery</h3>
                    <p className="text-gray-600 text-sm">
                      Your unique piece is carefully finished and delivered with certification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Custom?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-[#8B612E]" />
                  <span>Completely unique design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-[#8B612E]" />
                  <span>Lifetime warranty included</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-[#8B612E]" />
                  <span>Personal consultation included</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Design Process"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Craftsmanship"
                width={200}
                height={200}
                className="rounded-lg object-cover w-full h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
