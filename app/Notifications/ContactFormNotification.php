<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\AnonymousNotifiable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactFormNotification extends Notification
{
    use Queueable;

    public function __construct(
        protected array $data
    ) {}

    public function via(AnonymousNotifiable $notifiable): array
    {
        return array_keys($notifiable->routes);
    }

    public function toMail(object $notifiable): MailMessage
    {
        $app = config('app.name');

        return (new MailMessage)
            ->from($this->data['email'], $this->data['name'])
            ->subject("[{$app}] Contact Form Submission")
            ->markdown('mail.contact-form', $this->data);
    }
}
