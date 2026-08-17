import React from "react";
import { Button } from "./Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type Step = "Info" | "Critères" | "Questions" | "Résultat" | "Récap" | "Terminée"

const steps: Step[] = [
    "Info",
    "Critères",
    "Questions",
    "Résultat",
    "Récap"
];

type StepIndicatorProps = {
    step: Step;
    setStep: (step: Step) => void;
    onSubmit: () => void;
};

export const StepIndicator = ({ step, setStep, onSubmit }: StepIndicatorProps) => {
    const currentIndex = steps.indexOf(step);

    if (step === "Terminée") return null;

    return (
        <>
            <nav className="flex w-full items-center justify-center mb-12 px-4">
                {steps.map((item, index) => {
                    const isActive = index === currentIndex;
                    const isCompleted = index < currentIndex;

                    return (
                        <React.Fragment key={item}>
                            <button
                                type="button"
                                onClick={() => setStep(item)}
                                className="group flex flex-col items-center gap-2"
                            >
                                <span
                                    className={`size-9 rounded-full flex items-center justify-center transition-all ${isActive || isCompleted
                                        ? "border-violet-400 bg-violet-400 text-white"
                                        : "border-gray-300 bg-white/20 text-gray-200"
                                        }`}
                                >
                                    {index + 1}
                                </span>

                                <span
                                    className={`hidden sm:block text-sm transition-colors ${isActive
                                        ? "font-semibold text-white"
                                        : isCompleted
                                            ? "text-white"
                                            : "text-gray-400"
                                        }`}
                                >
                                    {item}
                                </span>
                            </button>

                            {index < steps.length - 1 && (
                                <div
                                    className={`md:mx-3 mx-1.5 md:mb-6 md:h-1 sm:mb-6 h-0.5 flex-1 transition-colors ${index < currentIndex
                                        ? "bg-violet-400"
                                        : "bg-gray-200"
                                        }`}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </nav>

            <h2 className="uppercase text-2xl font-bold mb-8 text-center">
                {step}
            </h2>

            <div className="fixed bottom-0 left-0 z-20 flex w-full items-center justify-between px-6 py-4">
                {currentIndex > 0 ? (
                    <Button
                        size="small"
                        icon={ArrowLeft}
                        type="button"
                        onClick={() => setStep(steps[currentIndex - 1])}
                        className="rounded-lg px-4 py-2"
                    >
                        Précédent
                    </Button>
                ) : (
                    <div />
                )}

                {currentIndex < steps.length - 1 ? (
                    <Button
                        size="small"
                        type="button"
                        icon={ArrowRight}
                        iconPosition="right"
                        onClick={() => setStep(steps[currentIndex + 1])}
                        className="rounded-lg bg-black px-4 py-2 text-white w-30"
                    >
                        Suivant
                    </Button>
                ) : (
                        <Button
                        size="small"
                        type="button"
                        onClick={onSubmit}
                        className="rounded-lg bg-black px-4 py-2 text-white"
                    >
                        Enregistrer
                    </Button>
                )}
            </div>
        </>
    );
};