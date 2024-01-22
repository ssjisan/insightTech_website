import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";
import { DownArrow } from "../../Assets/IconSet";
import PropTypes from "prop-types";

export default function FaQAccordion({ questions }) {
    const [expanded, setExpanded] = useState(questions.length > 0 ? questions[0].id : "");

    const handleChange = (id) => (event, isExpanded) => {
        setExpanded(isExpanded ? id : false);
    };

    const AccordionSx = {
        marginBottom: "24px", marginTop: "24px",
        borderRadius: "12px",
        border: "1px solid rgba(145, 142, 175, 0.40)",
        boxShadow: "none",
        position: "inherit",
    }

    return (
        <div>
            {questions.map((question) => (
                <Accordion
                    key={question.id}
                    expanded={expanded === question.id}
                    onChange={handleChange(question.id)}
                    square="false"
                    sx={AccordionSx}
                >
                    <AccordionSummary expandIcon={<DownArrow />}>
                        <Typography variant="h6">{question.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="subtitle1" color="text.secondary">
                            {question.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

FaQAccordion.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};