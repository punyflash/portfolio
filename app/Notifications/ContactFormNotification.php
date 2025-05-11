<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\AnonymousNotifiable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use WeStacks\TeleBot\Laravel\Notifications\TelegramNotification;

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

    public function toMail(AnonymousNotifiable $notifiable): MailMessage
    {
        $app = config('app.name');

        return (new MailMessage)
            ->subject("[{$app}] Contact Form Submission")
            ->markdown('mail.contact-form', $this->data);
    }

    public function toTelegram(AnonymousNotifiable $notifiable): string
    {
        return (new TelegramNotification)
            ->sendMessage([
                'chat_id' => $notifiable->routeNotificationFor('telegram'),
                'text' => view('telegram.contact-form', $this->data)->render(),
                'parse_mode' => 'HTML',
            ]);
    }
}
