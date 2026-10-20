export const contactInfo = {
  phoneDisplay: "+91 97734 26970",
  phoneTel: "+919773426970",
  whatsappNumber: "919773426970",
  whatsappMessage: "Hi Nimbark Realty, I want property details",
  email: "captain69.official8999@gmail.com",
}

export const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
  contactInfo.whatsappMessage,
)}`

export const telLink = `tel:${contactInfo.phoneTel}`
export const mailtoLink = `mailto:${contactInfo.email}`
