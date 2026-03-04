"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Pricing() {
  const plans = [
    {
      name: "Hobby Plan",
      desc: "Perfect for getting started",
      price: 0,
      isMostPop: false,
      features: [
        "Make the best schedule",
        "Support your team",
        "Basic analytics",
      ],
    },
    {
      name: "Pro Plan",
      desc: "Best for growing teams",
      price: 29,
      isMostPop: true,
      features: [
        "Everything in Hobby",
        "Advanced team features",
        "Priority support",
        "Video calls",
        "Custom integrations",
      ],
    },
    {
      name: "Enterprise Plan",
      desc: "For large organizations",
      price: 99,
      isMostPop: false,
      features: [
        "Everything in Pro",
        "Advanced security",
        "Custom branding",
        "Dedicated support",
        "SLA guarantee",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-7xl px-3 py-16 sm:px-4 sm:py-24 md:px-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 flex flex-col gap-3 text-center sm:mb-16"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground text-center">
          Select the perfect plan for your needs. Upgrade or downgrade at any
          time.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative ${plan.isMostPop ? "md:scale-[1.03]" : ""}`}
          >
            <Card
              className={`relative h-full rounded-2xl ${
                plan.isMostPop
                  ? "border-2 border-primary bg-primary/5 shadow-lg"
                  : "border border-border"
              }`}
            >
              {plan.isMostPop && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="rounded-full border-2 border-primary bg-card px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <CardContent className="p-4 pt-6 sm:p-6 sm:pt-8">
                <div className="mb-5 text-center sm:mb-6">
                  <h3 className="mb-2 text-lg font-semibold sm:text-xl">
                    {plan.name}
                  </h3>
                  <p className="mb-3 text-sm text-muted-foreground sm:mb-4">
                    {plan.desc}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold sm:text-4xl">
                      ${plan.price}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground sm:text-base">
                      /month
                    </span>
                  </div>
                </div>

                <Separator className="my-4 sm:my-6" />

                <ul className="space-y-2.5 sm:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-xs sm:text-sm"
                    >
                      <CheckIcon className="mr-2 h-4 w-4 shrink-0 text-primary sm:mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="p-4 pt-0 sm:p-6 sm:pt-0">
                <Button
                  className="w-full"
                  variant={plan.isMostPop ? "default" : "outline"}
                  size="lg"
                >
                  {plan.price === 0 ? "Get Started Free" : "Choose Plan"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
