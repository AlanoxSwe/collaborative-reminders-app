// Dependencies
import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import Head from 'next/head';
// Utils
import db from '@/util/db';
// Components
import Wave from '@/components/common/Wave';
import Button from '@/components/common/Button';
import LatestTodo from '@/components/index/LatestTodo';
import TextField from '@/components/common/TextField';
// Styles
import styles from '@/styles/index.module.scss';

const Home = (): JSX.Element => {
  Modal.setAppElement('#__next');
  
  const router = useRouter();
  const { newList }: { newList?: string } = router.query;
  const [modalIsOpen, setIsOpen] = useState(newList ? true : false);

  const name = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  
  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  function createList(e): void {
    e.preventDefault();
    if (name.current.value) {
      db.createList(name.current.value, password.current.value);
    }
  }

  return (
    <div>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.waveContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to uitodo</h1>
          <Button type="primary" onClick={openModal}>Create To-Do List</Button>
        </div>
        <Wave color="#fff" />
        <LatestTodo />
      </main>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
      >
        <div className={styles.modalContainer}>
          <h2>Enter list details</h2>
          <form className={styles.modalForm}>
            <TextField type="text" text="List Name..." ref={name} />
            <TextField type="password" text="Password..." ref={password} />
            <Button type="primary" onClick={(e) => createList(e)}>Create</Button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default Home;
