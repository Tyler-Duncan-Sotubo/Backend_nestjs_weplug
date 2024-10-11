import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as sgMail from '@sendgrid/mail';

@Injectable()
export class IdentityService {
  constructor(private config: ConfigService) {}
  async sendIdentityVerificationEmail() {
    sgMail.setApiKey(this.config.get('SEND_GRID_API_KEY'));

    const msg = {
      to: 'tylertooxclusive@gmail.com',
      from: {
        name: 'Identity Verification',
        email: 'noreply@weplugmusic.com',
      },
      templateId: this.config.get('IDENTITY_VERIFICATION_TEMPLATE_ID'),
    };

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }
}
