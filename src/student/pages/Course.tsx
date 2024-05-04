import QuestionCircleFilled from "@ant-design/icons/QuestionCircleFilled";
import CheckCircleFilled from "@ant-design/icons/lib/icons/CheckCircleFilled";
import { Button, Radio, RadioChangeEvent, Space, Typography } from "antd";
import { useCallback, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCourseById } from "../../backend/courses";
import { TestQuestions } from "../../backend/courses-material";

const StudentCourse = () => {
  const { courseId } = useParams();
  const [course] = useState(() => getCourseById(Number(courseId)));
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [showTest, setShowTest] = useState(false);

  const openTestClickHandler = useCallback(() => {
    setShowTest(true);
  }, []);

  const onAnswerChange = useCallback(
    (index: number, answer: number) => {
      const newAnswers = [...userAnswers];
      newAnswers[index] = answer;
      setUserAnswers(newAnswers);
    },
    [userAnswers]
  );

  const onSubmit = useCallback(() => {
    if (!course) {
      return;
    }
    const correctAnswers = course.material.test.questions.map(
      (q) => q.correctAnswers
    );
    const userScore = userAnswers.filter(
      (answer, index) => answer === correctAnswers[index]
    ).length;
    setScore(userScore);
  }, [userAnswers, course]);

  return (
    <>
      <Typography.Title level={3}>{course?.name}</Typography.Title>
      <Link to="/main">Go back</Link>
      {course && (
        <div>
          <Typography.Title level={4}>Материалы лекции:</Typography.Title>
          <div>{course.material.lecture.text}</div>
          {!showTest ? (
            <Button
              type="primary"
              icon={<QuestionCircleFilled />}
              onClick={openTestClickHandler}
            >
              Перейти к тесту
            </Button>
          ) : (
            <div>
              {course.material.test.questions.map((question, index) => (
                <TestQuestion
                  key={index}
                  disabled={score !== null}
                  {...question}
                  onChange={(answer) => onAnswerChange(index, answer)}
                />
              ))}
              <Button
                onClick={onSubmit}
                disabled={score !== null}
                icon={<CheckCircleFilled />}
              >
                Отправить
              </Button>
              {score !== null && (
                <div>
                  {`Верных ответов: ${score} из ${course.material.test.questions.length}`}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const TestQuestion = (
  props: TestQuestions & {
    onChange: (answer: number) => void;
    disabled: boolean;
  }
) => {
  const onAnswerChange = useCallback(
    (e: RadioChangeEvent) => {
      props.onChange(e.target.value);
    },
    [props]
  );
  return (
    <div>
      <div>{props.question}</div>
      <Radio.Group onChange={onAnswerChange} disabled={props.disabled}>
        <Space direction="vertical">
          {props.answers.map((answer, i) => (
            <Radio key={i} value={i}>
              {answer}
            </Radio>
          ))}
        </Space>
      </Radio.Group>
    </div>
  );
};

export default StudentCourse;
