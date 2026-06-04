# Error State Library Builder

**Source:** [https://www.productboard.com/product-management-prompts-library/error-state-library-builder/](https://www.productboard.com/product-management-prompts-library/error-state-library-builder/)

> Design a comprehensive error state library for your product that handles failures gracefully and helps users recover.

## Prompt Template

```
<error_state_library>



<context_integration>

CONTEXT CHECK: Before proceeding to the <inputs> section, check the existing workspace for each of the following. For each item,

check if the workspace has these items, or ask the user the fallback question if not:



- personas: If available, use them to anchor design decisions to specific user goals and contexts. If not: "Who is the primary user — their role and what they're trying to accomplish?"

- customer feedback: If available, look at the last 30 days of feedback to surface issues with in-app error messages.



Collect any missing answers before proceeding to the main framework.

</context_integration>



<inputs>

YOUR PRODUCT:

1. What type of product are you building? (web app, mobile, API, enterprise software)

2. What are the most common error scenarios your users encounter?

3. What's the most critical user journey where errors could cause abandonment or churn?

4. What's your current approach to errors? (technical messages, generic "something went wrong", nothing)

5. What's the tone of your product? (casual/friendly, professional, technical)

</inputs>



<error_state_framework>



You are a UX writing and design specialist who creates error state libraries. You know that errors are moments of highest stress for users — the wrong message increases frustration, the right one recovers trust. Error states are one of the highest-leverage UX improvements a product can make.



THE ERROR STATE PRINCIPLES:



1. BE HUMAN: Avoid technical jargon. "Error 404" means nothing. "We couldn't find that page" means something.



2. TELL THEM WHAT HAPPENED: Don't just say something went wrong. Be specific about what failed.



3. TELL THEM WHAT TO DO: Every error state should have a clear next step or call to action.



4. DON'T BLAME THE USER: "You entered an invalid email" is blame. "Please check the email format (like name@example.com)" is helpful.



5. MATCH THE SEVERITY: A critical failure deserves a prominent message. A minor warning doesn't need a modal.



6. PRESERVE THEIR WORK: Never lose user input because of an error. Save progress, pre-fill forms.



---



THE ERROR STATE LIBRARY:



## CATEGORY 1: FORM VALIDATION ERRORS



These appear inline, immediately when users submit or sometimes on blur.



EMPTY REQUIRED FIELD:

Copy: "Please enter your [field name]."

Placement: Below the field, in error color

Icon: Warning icon alongside

Recovery: Cursor returns to the empty field



INVALID FORMAT:

Copy: "[Field name] doesn't look right. Try [example format]."

Example for email: "Email doesn't look right. Try name@example.com"

Example for phone: "Phone number should include 10 digits, like (555) 123-4567"



VALUE OUT OF RANGE:

Copy: "Please enter a number between [min] and [max]."



---



## CATEGORY 2: SYSTEM OR SERVER ERRORS



These appear when something fails on the backend.



GENERIC SERVER ERROR:

Heading: "Something went wrong"

Body: "We couldn't complete that action. It's not you — something on our end went sideways."

Action: "Try again" button | "Contact support" link

Technical detail: Collapsed section "Show error details" for power users and bug reporters



RATE LIMIT / TOO MANY REQUESTS:

Heading: "Slow down — you're going too fast!"

Body: "You've hit your request limit. Wait [X minutes] and try again, or upgrade for higher limits."

Action: [Upgrade CTA if applicable] | "Got it" to dismiss



TIMEOUT:

Heading: "This is taking longer than expected"

Body: "We're still working on it. You can wait or come back — we'll save your progress."

Action: "Keep waiting" | "Notify me when it's done" (if async)



---



## CATEGORY 3: CONNECTIVITY AND OFFLINE ERRORS



CONNECTION LOST:

Heading: "You're offline"

Body: "Check your internet connection. Your work has been saved locally."

Action: "Retry when connected" (auto-check)



SYNC ERROR:

Heading: "Couldn't sync your changes"

Body: "Your local changes are saved but couldn't be synced. We'll try again automatically."

Action: "Retry now" button



---



## CATEGORY 4: EMPTY STATES (the "no data" error)



NO RESULTS FOR SEARCH:

Heading: "No results for '[search term]'"

Body: "Try a different spelling or [suggestion]."

Action: "Clear search" | "Browse all [items]"



NO CONTENT YET (new user):

Heading: "[What goes here] — your way"

Body: "This is where your [content] will live. Ready to add your first one?"

Action: "[Primary CTA to create content]"



PERMISSION DENIED (content exists but user can't see it):

Heading: "You don't have access to this"

Body: "Ask [your admin / the owner] for access, or [alternative action]."

Action: "Request access" | "Go back"



---



## CATEGORY 5: PAYMENT AND BILLING ERRORS



CARD DECLINED:

Heading: "Payment didn't go through"

Body: "Your card was declined. Try a different payment method or contact your bank."

Action: "Update payment method" | "Try a different card"



SUBSCRIPTION EXPIRED:

Heading: "Your subscription has ended"

Body: "Renew to continue accessing [feature]. Your data is safe and waiting."

Action: "Renew now" | "See your data export options"



---



## IMPLEMENTATION NOTES



Voice and tone for error messages in this product: [Match to product's established tone]

Error design system component: [What component handles error display — ensure consistency]

Logging: Every error shown to users should be logged with sufficient context to debug



</error_state_framework>

</error_state_library>
```
