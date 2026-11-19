import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, Clock3, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { site } from '../data/site'
import { products } from '../data/products'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const serviceOptions = [
  'Custom steel fabrication',
  'Repair & restoration',
  'Maintenance visit',
  'Secure service lockers',
  'General enquiry',
]

function normalizeAndValidateIndianPhone(rawInput = '') {
  let cleaned = String(rawInput).replace(/[\s()-]/g, '')

  if (cleaned.startsWith('+91')) {
    cleaned = cleaned.slice(3)
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    cleaned = cleaned.slice(2)
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = cleaned.slice(1)
  }

  const isValid = /^[6-9]\d{9}$/.test(cleaned) && !/^(.)\1{9}$/.test(cleaned)

  return {
    isValid,
    normalized: isValid ? `+91${cleaned}` : String(rawInput).trim(),
  }
}

function isValidEmailAddress(rawEmail = '') {
  const trimmed = String(rawEmail).trim()
  if (!trimmed) return true // Optional field; only validate non-empty input
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)
}

function FieldError({ message }) {
  if (!message) return null
  return (
    <div className="field-error-box" role="alert">
      <span className="field-error-icon" aria-hidden="true">
        !
      </span>
      <span>{message}</span>
    </div>
  )
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const requestedProduct = products.find((item) => item.slug === searchParams.get('product'))

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: requestedProduct ? requestedProduct.name : 'General enquiry',
    message: requestedProduct
      ? `I would like a quote for ${requestedProduct.name.toLowerCase()}.`
      : '',
  })
  const [sent, setSent] = useState(false)

  const [phoneTouched, setPhoneTouched] = useState(false)
  const [phoneError, setPhoneError] = useState('')
  const [phoneShakeKey, setPhoneShakeKey] = useState(0)

  const [emailTouched, setEmailTouched] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [emailShakeKey, setEmailShakeKey] = useState(0)

  const phoneCheck = normalizeAndValidateIndianPhone(form.phone)

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  const validatePhoneField = (value, shouldShake = false) => {
    const { isValid } = normalizeAndValidateIndianPhone(value)
    if (!value.trim()) {
      setPhoneError('Mobile number is required.')
      if (shouldShake) setPhoneShakeKey((k) => k + 1)
      return false
    }
    if (!isValid) {
      setPhoneError('Enter a valid 10-digit Indian mobile number (e.g. 9776519474).')
      if (shouldShake) setPhoneShakeKey((k) => k + 1)
      return false
    }
    setPhoneError('')
    return true
  }

  const validateEmailField = (value, shouldShake = false) => {
    const trimmed = value.trim()
    if (!trimmed) {
      setEmailError('')
      return true
    }
    if (!isValidEmailAddress(trimmed)) {
      setEmailError('Enter a valid email address (e.g. name@example.com).')
      if (shouldShake) setEmailShakeKey((k) => k + 1)
      return false
    }
    setEmailError('')
    return true
  }

  const handlePhoneChange = (e) => {
    update('phone')(e)
    if (phoneTouched || phoneError) {
      validatePhoneField(e.target.value, false)
    }
  }

  const handlePhoneBlur = () => {
    setPhoneTouched(true)
    validatePhoneField(form.phone, true)
  }

  const handleEmailChange = (e) => {
    update('email')(e)
    if (emailTouched || emailError) {
      validateEmailField(e.target.value, false)
    }
  }

  const handleEmailBlur = () => {
    setEmailTouched(true)
    validateEmailField(form.email, true)
  }

  const summary = useMemo(() => {
    const formattedPhone = phoneCheck.isValid ? phoneCheck.normalized : form.phone.trim()
    const formattedEmail = form.email.trim()
    return [
      `Name: ${form.name.trim()}`,
      `Phone: ${formattedPhone}`,
      formattedEmail ? `Email: ${formattedEmail}` : null,
      `Interested in: ${form.interest}`,
      '',
      form.message.trim(),
    ]
      .filter(Boolean)
      .join('\n')
  }, [form, phoneCheck])

  const whatsappHref = `${site.whatsapp}?text=${encodeURIComponent(
    `Hello Sankari Enterprise,\n\n${summary}`,
  )}`

  const handleSubmit = (event) => {
    event.preventDefault()
    setPhoneTouched(true)
    setEmailTouched(true)

    const isPhoneOk = validatePhoneField(form.phone, true)
    const isEmailOk = validateEmailField(form.email, true)

    if (!isPhoneOk || !isEmailOk) {
      return
    }

    setSent(true)
  }

  const resetForm = () => {
    setSent(false)
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let’s build it in steel."
        description="Tell us what you need — a new unit, a repair or a service locker fit-out. Share your sizes and location, and we will get back with clear advice and a quote."
        aside={
          <div className="page-hero-fact">
            <strong>7 days</strong>
            <span>
              Mon – Sat 9 AM – 8 PM
              <br />
              Sun 10 AM – 2 PM
            </span>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <Reveal variant="left">
              <div className="contact-panel">
                <p className="eyebrow is-light">Direct lines</p>
                <h2>Talk to the workshop.</h2>
                <p className="contact-intro">
                  No call centres. Your enquiry reaches the people who will actually build and
                  install the furniture.
                </p>

                <ul className="contact-list">
                  <li>
                    <span className="contact-icon">
                      <Phone size={18} />
                    </span>
                    <div>
                      <small>Call</small>
                      <a href={site.phoneHref}>{site.phone}</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <MessageCircle size={18} />
                    </span>
                    <div>
                      <small>WhatsApp</small>
                      <a href={site.whatsapp} target="_blank" rel="noreferrer">
                        Message us
                      </a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <Mail size={18} />
                    </span>
                    <div>
                      <small>Email</small>
                      <a href={`mailto:${site.email}`}>{site.email}</a>
                    </div>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <small>Workshop</small>
                      <span>{site.address}</span>
                    </div>
                  </li>
                </ul>

                <div className="contact-hours">
                  <Clock3 size={18} />
                  <div>
                    <strong>Visiting hours</strong>
                    {site.hours.map((row) => (
                      <p key={row.day}>
                        <span>{row.day}</span>
                        <span>{row.time}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle size={17} /> Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={100} variant="right">
              <div className="contact-form-wrap">
                {sent ? (
                  <div className="form-success">
                    <span className="form-success-icon">
                      <Check size={26} />
                    </span>
                    <h2>Your enquiry is ready to send.</h2>
                    <p>
                      Click below to send your enquiry via WhatsApp. The details below will be included
                      automatically.
                    </p>
                    <div className="form-success-actions">
                      <a
                        className="btn btn-dark btn-lg"
                        href={whatsappHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle size={18} /> Send via WhatsApp
                      </a>
                    </div>
                    <pre className="form-summary">{summary}</pre>
                    <button type="button" className="text-link" onClick={resetForm}>
                      Edit details
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="eyebrow">Enquiry form</p>
                    <h2>Tell us about your project.</h2>
                    <p className="form-note">
                      Fields marked * are required. We usually respond within one working day.
                    </p>

                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                      <div className="field-row">
                        <label className="field">
                          <span>Name *</span>
                          <input
                            type="text"
                            required
                            placeholder="Your full name"
                            value={form.name}
                            onChange={update('name')}
                          />
                        </label>

                        <label className="field">
                          <span>Phone *</span>
                          <input
                            key={phoneShakeKey}
                            type="tel"
                            required
                            placeholder="Your mobile number"
                            inputMode="tel"
                            value={form.phone}
                            onChange={handlePhoneChange}
                            onBlur={handlePhoneBlur}
                            aria-invalid={Boolean(phoneError)}
                            className={phoneError ? 'input-error input-shake' : ''}
                          />
                          <FieldError message={phoneError} />
                        </label>
                      </div>

                      <div className="field-row">
                        <label className="field">
                          <span>Email</span>
                          <input
                            key={emailShakeKey}
                            type="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleEmailChange}
                            onBlur={handleEmailBlur}
                            aria-invalid={Boolean(emailError)}
                            className={emailError ? 'input-error input-shake' : ''}
                          />
                          <FieldError message={emailError} />
                        </label>

                        <label className="field">
                          <span>I’m interested in *</span>
                          <select required value={form.interest} onChange={update('interest')}>
                            <optgroup label="Products">
                              {products.map((product) => (
                                <option key={product.slug} value={product.name}>
                                  {product.name}
                                </option>
                              ))}
                            </optgroup>
                            <optgroup label="Services">
                              {serviceOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </optgroup>
                          </select>
                        </label>
                      </div>

                      <label className="field">
                        <span>Details *</span>
                        <textarea
                          required
                          rows={6}
                          placeholder="Sizes, quantities, finish preference, location — anything that helps us quote accurately."
                          value={form.message}
                          onChange={update('message')}
                        />
                      </label>

                      <button type="submit" className="btn btn-primary btn-lg form-submit">
                        Prepare enquiry <Send size={17} />
                      </button>
                      <p className="form-disclaimer">
                        This form prepares your enquiry and lets you send it through your email app or
                        WhatsApp — no account needed.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="visit-strip">
        <div className="container visit-inner">
          <div>
            <p className="eyebrow is-light">Before you visit</p>
            <h2>Bring your measurements. Leave with a plan.</h2>
          </div>
          <p>
            A rough sketch, room sizes or even photos of the space help us give you a useful quote on
            the spot. Call ahead and we will keep the time free.
          </p>
          <a className="btn btn-outline-light btn-lg" href={site.phoneHref}>
            <Phone size={17} /> Call {site.phone}
          </a>
        </div>
      </section>
    </>
  )
}