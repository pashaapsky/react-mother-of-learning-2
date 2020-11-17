import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export const Notes = ({notes, onRemove}) => {
    const alert = useContext(AlertContext);

    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                <CSSTransition
                    key={note.id}
                    classNames={'note'}
                    timeout={800}
                >
                    <li className="list-group-item note">
                        <div className="">
                            <strong className="mr-3">{note.title}</strong>

                            <small>{note.date}</small>
                        </div>

                        <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => {
                                onRemove(note.id);
                                alert.show('Запись успешно удалена', 'success')
                            }}
                        >
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    )
};
